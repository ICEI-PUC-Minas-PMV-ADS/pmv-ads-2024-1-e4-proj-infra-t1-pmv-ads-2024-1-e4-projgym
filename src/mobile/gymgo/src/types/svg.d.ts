declare module "*.svg" {
    import React from 'react';
    import { SVGProps } from 'react';
    const content: React.FC<SVGProps>;
    export default content;
}