# gux-side-sheet-beta



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                             | Default   |
| -------- | --------- | ----------- | -------------------------------- | --------- |
| `size`   | `size`    |             | `"large" \| "medium" \| "small"` | `'small'` |


## Events

| Event              | Description | Type                |
| ------------------ | ----------- | ------------------- |
| `sideSheetDismiss` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [gux-modal-side-sheet-beta](.)

### Depends on

- [gux-dismiss-button](../../stable/gux-dismiss-button)

### Graph
```mermaid
graph TD;
  gux-side-sheet-beta --> gux-dismiss-button
  gux-dismiss-button --> gux-button-slot
  gux-dismiss-button --> gux-icon
  gux-modal-side-sheet-beta --> gux-side-sheet-beta
  style gux-side-sheet-beta fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
