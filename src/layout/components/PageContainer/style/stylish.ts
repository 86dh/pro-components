﻿import type { GenerateStyle, ProAliasToken } from '../../../../provider';
import { useStyle as useAntdStyle } from '../../../../provider';

export interface stylishToken extends ProAliasToken {
  componentCls: string;
}

export function useStylish(
  prefixCls: string,
  {
    stylish,
  }: {
    stylish?: GenerateStyle<stylishToken>;
  },
) {
  return useAntdStyle('ProLayoutPageContainerStylish', (token) => {
    const stylishToken: stylishToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    if (!stylish) return [];

    return [
      {
        [`div${stylishToken.componentCls}`]: stylish?.(stylishToken),
      },
    ];
  });
}
