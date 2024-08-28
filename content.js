import { Effect } from "effect";

console.log("Hello world");

Effect.runSync(Effect.log("Hello from Effect"));
