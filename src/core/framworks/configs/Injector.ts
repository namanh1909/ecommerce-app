/* eslint-disable no-useless-escape */
let instance: Injector | null = null;

type Factory = () => any;
type Constructor<T> = new (...args: any[]) => T;

class Injector {
	factories: { [key: string]: Factory } = {};

	singletons: { [key: string]: any } = {};

	static getInstance(): Injector {
		if (!instance) {
			instance = new Injector();
		}
		return instance;
	}

	register(key: string, factory: Factory): void {
		this.factories[key] = factory;
	}

	registerSingle(key: string, instance: any): void {
		this.singletons[key] = instance;
	}

	get<T>(CTor: Constructor<T>, params?: { [key: string]: any }): T {
		const dependencies = this.resolveDependencies(CTor, params);
		// a workaround to allow calling a constructor through .apply
		// see https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
		function MiddlemanCTor(this: any) {
			CTor.apply(this, dependencies);
		}
		MiddlemanCTor.prototype = Object.create(CTor.prototype);
		MiddlemanCTor.prototype.constructor = MiddlemanCTor;
		return new (MiddlemanCTor as any)() as T;
	}

	resolveDependencies<T>(
		CTor: Constructor<T>,
		params?: { [key: string]: any },
	): any[] {
		params = params || {};
		const args = this.getArguments(CTor);
		const dependencies: any[] = [];
		for (let i = 0; i < args.length; i++) {
			const paramName = args[i];
			const factory = this.factories[paramName];

			// resolve dependency using:
			// 1. parameters supplied by caller
			// 2. registered factories
			// 3. registered singletons
			const dependency =
				params[paramName] ||
				(typeof factory === 'function' ? factory() : undefined) ||
				this.singletons[paramName];

			dependencies.push(dependency);
		}
		return dependencies;
	}

	getArguments(func: Function): string[] {
		// Regex from require.js
		const FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
		const args = func
			.toString()
			.match(FN_ARGS)![1]
			.split(',')
			.map(function (str) {
				return str.trim();
			});
		return args;
	}
}
export default Injector.getInstance();
