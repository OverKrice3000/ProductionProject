import type { ResolvePluginInstance, Resolver } from "webpack";

export class BuildAsyncMockPlugin implements ResolvePluginInstance {
  apply (resolver: Resolver): void {
    const target = resolver.ensureHook(`resolve`);

    resolver.getHook(`resolve`).tapAsync(`AsyncComponentAliasPlugin`, (request, resolveContext, callback) => {
      const { request: originalRequest } = request;

      if (originalRequest && /\.async$/.test(originalRequest)) {
        const newRequest = originalRequest.replace(/\.async$/, ``);

        const newRequestObj = {
          ...request,
          request: newRequest,
        };

        resolver.doResolve(target, newRequestObj, `Aliasing ${originalRequest} to ${newRequest}`, resolveContext, callback);
        return;
      }

      callback();
    });
  }
}
