import {
  createHandler,
  renderAsync,
  renderStream,
  StartServer,
} from "solid-start/entry-server";

export default createHandler(
  // renderAsync((event) => <StartServer event={event} />)
  renderStream((event) => <StartServer event={event} />)
);
