import type { SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { post } from "./post";
import certification from "./certification";

export const schemaTypes: SchemaTypeDefinition[] = [project, post, certification];
