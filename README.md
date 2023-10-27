# Issue repro: @tanstack/solid-query on Solid Start - enabled flag not working with SSR

The `enabled` flag is not working with solid query and Solid Start's SSR.


1. initialize by running:

```
npm install
npm run dev
```

2. go to `http://localhost:3000/`
3. observe no query data due to it being disabled
4. click the "enable query" button
5. observe query not being enabled, fetcher function was not run


## Expected output

Query should be executed once the `enabled` option is set to `true`, even with SSR.

## Actual output - Async or Stream SSR

Query is not being run, nothing happens.

## Actual output - No SSR

Everything works fine.

## Additional notes

- the SSR mode can be changed in `src/entry-server.tsx`, when set to
  `renderSync` (CSR) it works, but with `renderAsync` or `renderStream` it does
  not.
