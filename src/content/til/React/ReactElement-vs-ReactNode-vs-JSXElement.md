---
title: ReactElement vs JSX.Element vs ReactNode
date: 2023-02-26
---

- `ReactElement`와 `JSX.Element`는 `React.createElement`의 반환 타입이다.
- `JSX.Element`는 `props`와 `type`이 `any`인 `ReactElement`이다.

```ts
interface ReactElement<
  P = any,
  T extends string | JSXElemntConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}
```

```ts
// node_modules/@types/react/index.d.ts 에서 확인할 수 있다.
declare global {
    namespace JSX {
        interface Element extends React.ReactElement<any, any> { }
        ...
    }
}
```

- `ReactNode`는 `ReactElement`를 포함하는 타입니다.

```ts
type ReactText = string | number;
type ReactChild = ReactElment | ReactText;
interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;

type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```

- `ReactNode`는 클래스 컴포넌트가 가지는 `render()`함수의 반환 타입이다. 함수형 컴포넌트는 `JSX.Element | null`을 반환한다. (클래스 컴포넌트와 함수형 컴포넌트의 반환 타입이 다른 이유는 하위호환성 때문이라고 함)
- `ReactNode`는 원시타입(`string`, `number`, `boolean`, `null`, `undefined`)을 허용한다.

# 참조

1. https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement/59840095#59840095
