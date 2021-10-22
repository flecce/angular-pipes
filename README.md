# Simple pipes for Angular projects

This repo contains some usefull pipe for Angular project.

```
const items: any[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' }
];
```

## Filter pipe
Filters an items array by specific field. 

```
{{ items | filter:{ id: 1 }}
```

## Join pipe
Joins an items array by separator.

```
{{ items | join: ", " }}
```

## Select pipe
Selects a specific field from object.

```
{{ item | select:'name' }}
```

## Take pipe
Takes the n first items from array.

```
{{ items | take:5 }}
```

## TakeOne pipe
Take the first item of an array.

```
{{ items | takeOne }}
```
