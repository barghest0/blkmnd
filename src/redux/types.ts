import store, { rootReducer } from './store';

type State = ReturnType<typeof rootReducer>;
type Store = ReturnType<typeof store>;
type Dispatch = Store['dispatch'];

export { State, Store, Dispatch };
