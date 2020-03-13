# ChangeLog


## 0.0.8

*2020-03-13*

### Fix

GlobalModule - GSM instance is not unique in global. mount it to `global` variable

## 0.0.5 - 0.0.7

*2020-03-12*

### Fix

- `IContainerProp` to `IContainerProps`

### Opt 

- repace `registerModule`, `useGlobalModule` with `GSM.mount` , `useReactGlobalModule`. 
  useGlobalModule will trigger when any field changed in the module.state. GSM is a common
  module manager only implemented with native JS. useReactGlobalModule is a connector for React.

- repace `ReactStore` with `ReactHookStore`. 

- remove some unuse module

## 0.0.4

*2020-03-10*

### Fix

- Update dependency `asker` to fix bug