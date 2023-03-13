## Compare react states

I compared mobx state with makeAutoObservable and @risingstack/react-easy-state

## Summarize

They works similarly

- mobx weight in bundle 49kb, react-easy-state about 9kb
- mobx use classes and works with `this` keyword, react-easy-state works with plain object
- react-easy-state code is shorter
- I compared performance and memory usage, results are the same

I'll try to use react-easy-state in production and write more later
