---
key: post
title: NaN, isNaN, Number.isNaN
date: 2022-11-23
featuredImage: ../../images/default-thumbnail.png
tags:
  - Javascript
---

`isNaN()`은 자바스크립트에서 어떠한 값이 숫자인지 아닌지 판별하기 위해 자주 사용되는 빌트인 함수입니다. 여기서 `NaN`은 Not a Number의 줄임말입니다. 유용한 함수이지만 이 함수의 동작은 예상과 다를 때가 있어 사용에 주의가 필요합니다. `isNaN()`의 모호성(?)을 피하기 위해 `Number.isNaN()`을 사용할 수 있습니다. 아래에서 `NaN`이란 무엇인지, `isNaN()`의 동작, 그리고 `isNaN()`과 `Number.isNaN()`의 차이점을 알아봅니다.

# NaN

`NaN`은 `Number.NaN`과 같습니다. `NaN`을 결과로서 반환하는 연산은 다음 다섯가지 종류가 있습니다.

- 숫자로서 읽을 수 없음: `parseInt("어쩌구")`, `Number(undefined)`
- 결과가 허수인 수학 계산식: `Math.sqrt(-1)`
- 피연산자가 `NaN`: `7 ** NaN`
- 정의할 수 없는 계산식: `0 * Infinity`
- 문자열을 포함하면서 덧셈이 아닌 계산식: `"가" / 3`

`NaN`은 자기 자신과 같지 않은 유일한 값입니다. `Number.isNaN()` 또는 `isNaN()`을 사용하면 `NaN`을 판별할 수 있습니다.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
```

# isNaN()

`isNaN()` 함수는 어떠한 값을 **`number`로 변환했을 때** `NaN`인지 아닌지를 판별합니다.

```js
isNaN({}); // true
isNaN("ponyfoo"); // true
isNaN(NaN); // true
isNaN("pony" / "foo"); // true
```

주의할 점은, `number`로 형변환 (coercion)을 한 뒤 `NaN` 판별을 하기 때문에 `number`가 아닌 타입에 대해서 예상치 못한 결과를 얻을 수 있다는 것입니다. 예를 들어, 빈 문자열인 `""`은 0으로 변환되므로 `isNaN("")`은 `false`를 반환합니다. 따라서 이름과 다르게 `isNaN()`은 입력값이 숫자인이 아닌지 판별하는 것도 아니고, `NaN`인지 아닌지 판별하는 것도 아닙니다.

# Number.isNaN()

가끔 당황스러운 결과를 내뱉는 `isNaN()`에 비해 `Number.isNaN()`는 좀 더 믿음직스럽습니다. `Number.isNaN()`은 입력값을 `number`로 형변환을 하지 않고 `NaN`과 같은지 아닌지만 판별합니다.

```js
Number.isNaN({}); // false
Number.isNaN("ponyfoo"); // false
Number.isNaN(NaN); // true
Number.isNaN("pony" / "foo"); // true
```

`{}`와 `"ponyfoo"`는 `number`로 형변환시 `NaN`이 되기 때문에 `isNaN()`의 반환값이 `true`였지만, `Number.isNaN()`을 사용하면 말 그대로 `NaN`이 아니므로 `false`를 반환합니다.

# 결론

- `NaN`은 숫자로 표현할 수 없음을 나타내는 값입니다.
- `isNaN()`은 어떠한 값을 `number`로 변환했을 떄 `NaN`인지 아닌지를 판별합니다. 하지만 이 형변환 때문에 `isNaN("")`의 결과 값이 `false`가 되는 등, 혼란스러울 수 있습니다.
- `Number.isNaN()`은 형변환 없이 입력값이 `NaN`과 같은지 아닌지를 판별합니다. 따라서 `isNaN()`보다 좀 더 안전하게 사용할 수 있습니다.

# 참조

1. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
1. https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript
