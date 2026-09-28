import type { SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { post } from "./post";

export const schemaTypes: SchemaTypeDefinition[] = [project, post];
