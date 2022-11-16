import React from "react";

export const Question = () => {
    return (<>
    <h2>
        Difference between
import Something from package VS import Something from package

    </h2>

    <p>
    defaultExport
Name that will refer to the default export from the module. Must be a valid JavaScript identifier.

module-name
The module to import from. The evaluation of the specifier is host-specified. This is often a relative or absolute URL to the .js file containing the module. In Node, extension-less imports often refer to packages in node_modules. Certain bundlers may permit importing files without extensions; check your environment. Only single quoted and double quoted Strings are allowed.

name
Name of the module object that will be used as a kind of namespace when referring to the imports. Must be a valid JavaScript identifier.

exportN
Name of the exports to be imported. The name can be either an identifier or a string literal, depending on what module-name declares to export. If it is a string literal, it must be aliased to a valid identifier.

aliasN
Names that will refer to the named imports. Must be a valid JavaScript identifier.
    </p>
    </>)
}

export default Question;