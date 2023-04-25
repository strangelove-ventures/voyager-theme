import type { ThemeOverride } from "@chakra-ui/react";

import { Button } from "./button";
import { Heading } from "./heading";
import { Link } from "./link";

export const components: ThemeOverride["components"] = { Button, Heading, Link };
