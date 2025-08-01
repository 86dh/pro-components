---
nav:
  title: Layout
title: Demos
order: 0
legacy: /layout

group: Layout
---

# ProLayout - Advanced Layout

ProLayout provides a standard, yet flexible, middle and backend layout, with one-click layout switching and automatic menu generation. It can be used with PageContainer to automatically generate breadcrumbs, page headers, and provide a low-cost solution to access the footer toolbar.

## Code Demo

### Basic usage

<code src="../../../demos/layout/base.tsx" iframe="650"></code>

### Load menu from server

ProLayout provides a powerful menu, but this necessarily encapsulates a lot of behavior, leading to dissatisfaction for users who need some special logic. So we provide a number of APIs that are expected to satisfy the vast majority of our clients in this way.

The main APIs used to load menu from the server are `menuDataRender` and `menuRender`, `menuDataRender` controls the current menu data and `menuRender` controls the menu's dom node.

<code src="../../../demos/layout/dynamicMenu.tsx" iframe="580"></code>

### Customize the content of the menu

With `menuItemRender`, `subMenuItemRender`, `title`, `logo`, `menuHeaderRender` you can customize the menu style very easily. If you are really not satisfied, you can use `menuRender` to fully customize it.

<code src="../../../demos/layout/customizeMenu.tsx" iframe="580"></code>

### Custom footer

ProLayout does not provide footer by default, if you want to have the same style as Pro official website, you need to introduce a footer by yourself.

<code src="../../../demos/layout/footer.tsx" iframe="580"></code>

This is used to show various applications of ProLayout, if you think your usage can help others, feel free to PR.

### Search menu

<code src="../../../demos/layout/searchMenu.tsx" iframe="580"></code>

### Multiple routes correspond to one menu item

<code src="../../../demos/layout/MultipleMenuOnePath.tsx" iframe="580"></code>

### Open all menus by default

<code src="../../../demos/layout/DefaultOpenAllMenu.tsx" iframe="580"></code>

### Using IconFont

<code src="../../../demos/layout/IconFont.tsx" iframe="580"></code>

### ghost mode

PageContainer configuration `ghost` can switch the page header to transparent mode.

<code src="../../../demos/layout/ghost.tsx" iframe="580"></code>

### Nested Layout

<code src="../../../demos/layout/Nested.tsx" iframe="580"></code>

### Customized collapsed

<code src="../../../demos/layout/customize-collapsed.tsx" iframe="580"></code>
