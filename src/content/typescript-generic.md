---
key: post
title: TIL-2022-02-07
date: 2023-02-07
tags:
  - TIL
  - Typescript
---

- `never` 타입은 공집합이다.

```
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type K = keyof (Person | Lifespan); // 타입이 never
```

- `keyof` 은 타입의 키(string or numeric literal)의 집합을 나타낸다.
- `keyof (A&B) = (keyof A) | (keyof B)`  
  `keyof (A|B) = (keyof A) & (keyof B)`
- Generic은 타입을 제한하는데 사용할 수 있다.

```
function getKey<K extends string>(val: any, key: K) {
  // ...
}
```

- `number[]`은 `[number, number]`의 부분집합이 아니다.

```
const list = [1, 2];
const tuple: [number, number] = list;
  // ~~~~ 'number[]' 타입은 'number, number' 타입의 0, 1 속성에 없습니다.
```

- 구조적 타이핑의 관점에서 `[number, number, number]`은 `[number, number]`에 할당할 수 있을 것처럼 보이지만, `[number, number]`은 `{0, number, 1: number, length: 2}`로 모델링된다. 즉, `length` 값이 다르기 때문에 할당할 수 없다.

```
cosnt triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
  // ~~~ '[number, number, number]' 형식은 '[number, number]' 형식에 할당할 수 없습니다.
  //     'length' 속성의 형식이 호환되지 않습니다.
  //     '3' 형식은 '2' 형식에 할당할 수 없습니다.
```

- 타입 스크립트의 타입이 되지 못하는 값의 집합은 사용할 수 없다.

```
type NonZeroNums = Exclude<number, 0>; // 타입은 여전히 number
```
