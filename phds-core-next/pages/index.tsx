import React, { useState } from "react";
// import { Breadcrumbs } from "@localhost/phds-core";
import Breadcrumbs from "@localhost/phds-core/Breadcrumbs";
import Button from "@localhost/phds-core/Button";

export default function Home() {
  return (
    <>
      <Breadcrumbs path="/1/2/3" />
      <Button>Texto</Button>
    </>
  );
}
