Done
- Absolute imports
- Removed unnecessary PLP var that returns ArticleList, exported as default instead.
- Added components, containers and hooks directories for better structure.
- Intl number formatter got its own component as it is commonly used part. 
- CurrencyNumberFormatter intlNumberFormatValues array as formatterConfig object to be more readable.
- ArticleCard got its own component, renamed to ProductListItem
- ProductListItem instead of using Article type has its own type to be less dependant on API structure. 
- ProductListItem added alt to image.
- ProductListItem links wrapped in nav.
- ProductListItem imageUrl optional, verified on component use if first element exists
- ProductListItem wrapped in article instead of div, category name & products in section for better semantic.
- ProductListItem section with role=button is now just a button to keep it focusable, responsive to keyboard clicks.
- ProductListItem name & price wrapped in p instead of div
- ArticleList renamed to ProductList, shorter maps
- ProductList refactored to function component
- Abstracted common hook useOnMount, kept in hooks directory (not in use now as I used apollo client)
- ProductList variable articles from render func. named products now
- ProductList moved to containers
- Added graphql, @apollo/client dependencies to manage future calls, state & cache 
- new GraphQlClientProvider file containing provider in api directory
- products query in separated file as useGetCategoryWithProducts, endpoint returns array where we ask for single category - so the hook is returning data as single category to simplify unnecessary logic
- Added .env file with graphql url
- ProductList loading condition changed to use loading from apollo client, instead of simply checking if data exists
- Added prettier
- Added LoadingIndicator component 
- ProductList Condition to verify elements corrected from .length to !!.length 
- ProductList added missing error handling
- ProductList footer text wrapped with p
- ProductList added keys to lists (asked for children categories ID in query, used name concatenated with variant for products believing in uniqueness - could not ask for articles ID because of graphql validation error)
- Moved and reordered types.ts to api/categories 
- Added emotion, eslint & babel plugins
- Removed ProductList.css, index.css - moved to appropriate components as emotion styles
- Added GlobalStyles component
- Abstracted Page to separated file
- Page better semantic - used section, header, aside, main, footer
- Abstracted generic list component that accepts query result
- GenericList has ability to style differently items layout
- Moved some dependencies to dev dependencies 
- Added test-coverage to scripts