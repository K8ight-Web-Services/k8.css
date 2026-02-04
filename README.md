
K8 UI FRAMEWORK — COMPLETE DOCUMENTATION k8.css & k8.js
=========================================

**K8** is a lightweight modular CSS + JavaScript UI framework built for responsive web apps, dashboards, admin panels, and dynamic systems.

This README covers BOTH:
- CSS Framework
- JavaScript UI Engine

------------------------------------------------------------
CORE FEATURES
------------------------------------------------------------

**Responsive Grid System**
Flex-based grid with mobile, tablet, and desktop breakpoints.

**Fluid Spacing System**
Uses clamp() with REM scaling for margins and padding.

**Modern UI Components**
Cards, buttons, forms, modals, drawers, tabs, accordions, tooltips, toasts, navbars, tables, floating labels, loaders.

**Dark Mode Ready**
Automatic dark theme variable switching.

**Utility Classes**
Flex, spacing, typography, display, width, height, viewport sizing, z-index, shadows, animations.

**No Dependencies Required (except optional jQuery)**

------------------------------------------------------------
CSS FRAMEWORK
------------------------------------------------------------

**Layout**
k8-row, k8-col, k8-half, k8-third, k8-quarter

**Spacing (Fluid)**
k8-m-*, k8-mt-*, k8-mb-*, k8-ml-*, k8-mr-*
k8-p-*, k8-pt-*, k8-pb-*, k8-pl-*, k8-pr-*

**Sizing**
k8-w-*, k8-h-*, k8-vw-*, k8-vh-*, k8-ratio-*

**Flex Utilities**
k8-flex, k8-justify-*, k8-items-*, k8-flex-wrap

**Typography**
k8-text-*, k8-bold, k8-strong, k8-small, k8-large

**Colors**
k8-red, k8-blue, k8-green, k8-theme, k8-dark, k8-light, etc.
Text: k8-text-*
Borders: k8-border-*

**Components**
Buttons: k8-btn, k8-button
Cards: k8-card
Forms: k8-input, k8-select, k8-textarea
Tables: k8-table, k8-table-all
Navbar: k8-bar
Modal: k8-modal, k8-popup
Tabs: k8-tabs
Accordion: k8-acc-header
Drawer: k8Drawer()
Toasts: k8Toast()
Tooltip: data-k8-tip
Loader: k8-loader

------------------------------------------------------------
JAVASCRIPT ENGINE
------------------------------------------------------------

**Sidebar**
k8_open(), k8_close()

**Modal System**
Auto modal generator
closeModal()
[data-k8-modal], [data-k8-close]

**Tabs**
k8Tabs(container)

**Accordion**
Click .k8-acc-header

**Toast Notifications**
k8Toast("Message","theme",3000)

**Drawer**
k8Drawer("#id")

**Form Handler**
form_handel(formId, trigger, callback, url)

**Date Function**
date("d-m-Y H:i:s", epoch, timezoneOffset)

**Currency Format**
format.in.format()
format.us.format()
etc.

**Drag System**
makeDragable(".handle")

**Search**
searchTable()
searchTableDivs()

**Utilities**
show(), hide(), v_blur(), pview(), selectElement()

------------------------------------------------------------
LICENSING SYSTEM
------------------------------------------------------------

Framework includes footer hash integrity check.
If modified without permission, interface locks. 
Remove if used for projects not requireing enforce.

------------------------------------------------------------
USAGE
------------------------------------------------------------

1. Include CSS:
<link rel="stylesheet" href="k8.css">

2. Include JS:
<script src="k8.js"></script>

3. Use classes directly in HTML.

------------------------------------------------------------
VERSION
------------------------------------------------------------
k8.css : v2.0
k8.js : v2.0
K8 Modern UI Framework — Unified CSS + JS System

# K8ight Open Source License (KOSL) v1.0  
## An Extension of the GNU General Public License v3.0  

### Copyright (C) 2025 K8ight Web Services  
### https://k8ight.com  

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version, with additional terms as stated below.  

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.  

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.  

### Additional Terms (Extending GPL-3.0)  

1. Attribution Requirement  
   All distributions and modifications of this software must include clear and visible attribution to K8ight Web Services.  

2. No Warranty or Liability  
   The software is provided "as is" without any warranty of any kind. K8ight Web Services is not liable for any direct, indirect, incidental, or consequential damages arising from its use.  

3. Trademark and Branding  
   This license does not grant permission to use the K8ight Web Services name, logo, or trademarks without prior written consent.  

4. Compliance with K8ight Policies  
   Use of this software must comply with the policies outlined at <https://k8ight.com/?policy>. Any violation of these policies may result in termination of the license.  

5. Modification and Distribution  
   Modifications are permitted under the same license, provided that:  
   - Modifications are clearly documented.  
   - The source code of modifications is made publicly available.  
   - Any modified versions must not misrepresent their origin.  

6. Patent Use  
   This license includes a grant of rights to use any patents held by K8ight Web Services that are necessary to operate the software.  

For full license terms, refer to the GNU General Public License v3.0 at <https://www.gnu.org/licenses/gpl-3.0.html> and the additional terms at <https://k8ight.com/?policy>.  
