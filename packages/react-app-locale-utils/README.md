# @visma/react-app-locale-utils

Locale state, display names, date-fns, MUI and other locale utilities.

## Usage

`.env`

```sh
# Available locales, first is the default locale
VITE_LOCALES=["da-DK","en-US","es-ES","fi-FI","lt-LT","lv-LV","nb-NO","nl-NL","ro-RO","sv-SE","en-XA"]
```

### `useLocale`

```js
import useLocale from '@visma/react-app-locale-utils/lib/useLocale.js';

const [locale, setLocale] = useLocale();
const [lang] = locale.split('-');
```

### `useDateFnsLocale`

Requires use of `dateFnsLocaleVitePlugin` from `@visma/react-app-locale-utils/lib/dateFnsLocaleVitePlugin.js`.

```js
import { formatRelative, subDays } from 'date-fns';
import useDateFnsLocale from '@visma/react-app-locale-utils/lib/useDateFnsLocale.js';

const locale = useDateFnsLocale();
formatRelative(subDays(new Date(), 3), new Date(), { locale });
//=> "viime torstaina klo 19:26"
```

### `useMUILocale` (`useMaterialUILocale` for `@material-ui/core@4`)

```js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMUILocale from '@visma/react-app-locale-utils/lib/useMUILocale.js';

const locale = useMUILocale();
const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  locale
);

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

### `useDisplayName`

```js
import useDisplayName from '@visma/react-app-locale-utils/lib/useDisplayName.js';

const displayName = useDisplayName();
//=> "suomi"
```

### `displayNames`

```js
import displayNames from '@visma/react-app-locale-utils/lib/displayNames.js';

displayNames;
//=> [{"locale":"da-DK","value":"dansk"},{"locale":"en-US","value":"English"},...]
```

### `defaultLocale`

```js
import defaultLocale from '@visma/react-app-locale-utils/lib/defaultLocale.js';

defaultLocale;
//=> "da-DK"
```

### `locales`

```js
import locales from '@visma/react-app-locale-utils/lib/locales.js';

locales;
//=> ["da-DK","en-US","es-ES","fi-FI","lt-LT","lv-LV","nb-NO","nl-NL","ro-RO","sv-SE","en-XA"]
```
