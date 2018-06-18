import * as express from 'express';

declare function expressSwaggerGenerator(app: express.Express): expressSwaggerGenerator.IOptionParserFunction;

declare namespace expressSwaggerGenerator {
    interface ISwaggerOptions {
        swaggerDefinition: {
            info: {
                description: string,
                title: string,
                version: string,
            },
            host: string,
            basePath?: string,
            produces: string[],
            schemes: string[]
        },
        basedir: string,
        files: string[],
        typeDefinitions?: string
    }

    interface IOptionParserFunction {
        (options: ISwaggerOptions): void;
    }
}

export = expressSwaggerGenerator;