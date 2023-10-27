// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import {QueryClient} from "@tanstack/solid-query";
import {QueryClientProvider} from "@tanstack/solid-query";
import "./root.css";

export default function Root() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        throwOnError: true,

        staleTime: Infinity,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <A href="/">Index</A>
              <A href="/about">About</A>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </QueryClientProvider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
