# Ophiomormous

## A collection of useful Python functions ported to JavaScript

### Functions

#### all

Returns `true` if all values are `true`

```js
import { all } from 'ophiomormous'

all([1, true, 0, false])
```

#### any

Returns `true` if only one value is `true`

```js
import { any } from 'ophiomormous'

any([1, true, 0, false])
```

#### divmod

Returns the quotient and remainder in a list

```js
import { divmod } from 'ophiomormous'

divmod(36, 7)
```

#### enumerate

Returns a list of object with the character as the value and its index as the key

```js
import { enumerate } from 'ophiomormous'

enumerate("Hello")
```

#### max

Returns the largest number

```js
import { max } from 'ophiomormous'

max([9, 89, 8, 3, 0])
```

#### min

Returns the smallest number

```js
import { min } from 'ophiomormous'

min([9, 89, 8, 3, 0])
```

#### range

Returns a list of numbers through a specified range and step

```js
import { range } from 'ophiomormous'

range(7, 39, 8)
```

#### sum

Returns the sum of all values

```js
import { sum } from 'ophiomormous'

sum([9, 7, 3, 22, 4])
```
