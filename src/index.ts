/**
 * @amlplugins/atlassian-confluence
 *
 * Thin namespaced re-export of the native confluence.js SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Confluence Cloud REST API v2 — spaces, pages, blog posts, comments, attachments, properties.
 */

import * as _sdk from "confluence.js";
export * from "confluence.js";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "atlassian-jwt";
export * as secondary from "atlassian-jwt";
export { _secondary };
