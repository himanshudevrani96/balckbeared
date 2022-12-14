import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '../styles/theme'

const rowHeight = `50px`
const primaryLightWithAlpha = (alpha: number) => rgba(255, 255, 255, alpha)

export const StyledTable = styled.div<any>`
  transition: width 600ms ease-out, height 600ms ease-out;
  .ReactTable {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
   
    flex-direction: column;

    clear: both;
    border: none;
  }
  .ReactTable * {
    box-sizing: border-box;
  }
  .ReactTable .rt-table {
    -webkit-box-flex: 1;
    -ms-flex: auto 1;
    flex: auto 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
    border-collapse: collapse;
    font-family: NunitoRegular !important;
  }
  .ReactTable .rt-thead {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: ${rowHeight};
    -webkit-box-orient: horizontal;
    flex-direction: row;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ReactTable .rt-thead.-headerGroups {
    background: ${colors.base}
   
  }
  .ReactTable .rt-thead.-filters {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .ReactTable .rt-thead.-filters input,
  .ReactTable .rt-thead.-filters select {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: normal;
    outline: none;
  }
  .ReactTable .rt-thead.-filters .rt-th {
    border-right: 1px solid rgba(0, 0, 0, 0.02);
    text-align: start;
  }
  .ReactTable .rt-thead.-header {
    // border-bottom: 1px solid ${primaryLightWithAlpha(0.1)};
  }
  .ReactTable .rt-thead .rt-tr {
    text-align: center;
  }

  .ReactTable .rt-thead .rt-th.-sort-asc {
    box-shadow: none;
  }
  .ReactTable .rt-tbody .rt-tr-group {
      
  }
  .ReactTable .rt-thead .rt-th,
  .ReactTable .rt-thead .rt-td {
    padding: 5px 5px;
    line-height: normal;
    position: relative;
    text-align:right;
  
  }
  .ReactTable .rt-thead .rt-th.-cursor-pointer,
  .ReactTable .rt-thead .rt-td.-cursor-pointer {
    cursor: pointer;
  }
  .ReactTable .rt-thead .rt-th:last-child,
  .ReactTable .rt-thead .rt-td:last-child {
    border-right: 0;
  }
  .ReactTable .rt-thead .rt-th:focus {
    outline: none;
  }
  .ReactTable .rt-thead .rt-resizable-header {
    text-align: start;
    overflow: visible;
  }
  .ReactTable .rt-thead .rt-resizable-header:last-child {
    overflow: hidden;
  }
  .ReactTable .rt-thead .rt-resizable-header-content {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ReactTable .rt-thead .rt-header-pivot {
    border-right-color: #f7f7f7;
  }
  .ReactTable .rt-thead .rt-header-pivot:after,
  .ReactTable .rt-thead .rt-header-pivot:before {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ReactTable .rt-thead .rt-header-pivot:after {
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #fff;
    border-width: 8px;
    margin-top: -8px;
  }
  .ReactTable .rt-thead .rt-header-pivot:before {
    border-color: rgba(102, 102, 102, 0);
    border-left-color: #f7f7f7;
    border-width: 10px;
    margin-top: -10px;
  }
  .ReactTable .rt-tbody {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: ${colors.black}

  }
  .ReactTable .rt-tbody .rt-tr-group:last-child {
    border-bottom: 0;
  }
  .ReactTable .rt-tbody .rt-tr.-odd {
    background: ${colors.black}
    border-radius: 3px;
  }
  .ReactTable .rt-tbody .rt-td {
    display: flex;
    align-items: right;
    height: ${rowHeight};
    border-right: 1px solid rgba(0, 0, 0, 0.02);
  }
  .ReactTable .rt-tbody .rt-td:last-child {
    border-right: 0;
    width: auto;
  }
  .ReactTable .rt-tbody .rt-expandable {
    cursor: auto !important;
    text-overflow: clip;
    overflow: visible;
    > div {
      overflow-x: visible;
    }
  }
  .ReactTable .rt-tr-group {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border-bottom: 2px solid #413764;
    border-bottom: 1px solid #232222;
  }
  .ReactTable .rt-tr {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
  .ReactTable .rt-th,
  .ReactTable .rt-td {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    padding: 7px 5px;
    overflow: hidden;
    transition: 0.3s ease;
    transition-property: width, min-width, padding, opacity;
    > div,
    > div span {
      text-overflow: ellipsis;
      overflow-x: hidden;
    }
  }
  .ReactTable .rt-th.-hidden,
  .ReactTable .rt-td.-hidden {
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important;
  }
  .ReactTable .rt-expander {
    display: inline-block;
    position: relative;
    margin: 0;
    color: transparent;
    margin: 0 10px;
  }
  .ReactTable .rt-expander:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(-90deg);
    transform: translate(-50%, -50%) rotate(-90deg);
    border-left: 5.04px solid transparent;
    border-right: 5.04px solid transparent;
    border-top: 7px solid rgba(0, 0, 0, 0.8);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  .ReactTable .rt-expander.-open:after {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  .ReactTable .rt-resizer {
    display: inline-block;
    position: absolute;
    width: 36px;
    top: 0;
    bottom: 0;
    right: -18px;
    cursor: col-resize;
    z-index: 10;
  }
  .ReactTable .rt-tfoot {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    border-bottom: 1px solid ${primaryLightWithAlpha(0.1)};
    border-top: 1px solid ${primaryLightWithAlpha(0.1)};
    height: ${rowHeight};
    flex: 1 0 auto;
    flex-direction: row;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
  }
  .ReactTable .rt-tfoot .rt-td {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }
  .ReactTable .rt-tfoot .rt-td:last-child {
    border-right: 0;
  }
  .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
    background: ${colors.black}
  }
  .ReactTable .-pagination {
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 3px;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  .ReactTable .-pagination input,
  .ReactTable .-pagination select {
    background: inherit;
    height: 30px;
 
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: normal;
    outline: none;
    border: 0;
  }
  .ReactTable .-pagination .-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    border: 0;
    border-radius: 3px;
    padding: 6px;
    font-size: 1em;

    background: inherit;
    transition: all 0.1s ease;
    cursor: pointer;
    outline: none;
  }
  .ReactTable .-pagination .-btn[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  .-next > button {
    text-align: right;
  }
  .-previous > button {
    text-align: left;
  }
  .ReactTable .-pagination .-previous,
  .ReactTable .-pagination .-next {
    text-align: center;
  }
  .ReactTable .-pagination .-center {
    -webkit-box-flex: 1.5;
    -ms-flex: 1.5;
    flex: 1.5;
    text-align: center;
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-around;
  }
  .ReactTable .-pagination .-pageInfo {
    display: inline-block;
    margin: 3px 10px;
    white-space: nowrap;
    input {
      margin-bottom: 0 !important;
    }
  }
  .ReactTable .-pagination .-pageJump {
    width: 18px;
    display: inline-block;
  }
  .ReactTable .-pagination .-pageJump input {
    width: 70px;
    text-align: start;
    -moz-appearance: textfield;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .ReactTable .-pagination .-pageSizeOptions {
    margin: 3px 10px;
    position: absolute;
    left: 0;
    bottom: -20px;
    :before {
      cursor: initial;
      content: 'showing:';
    }
    select {
      margin-bottom: 0;
    }
  }
  .ReactTable .rt-noData {
    width: 100%;
    text-align: center;
    display: block;
    position: absolute;
    left: 50%;
    top: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    z-index: 1;
    pointer-events: none;
    padding: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  .ReactTable .-loading {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  .ReactTable .-loading > div {
    position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    -webkit-transform: translateY(-52%);
    transform: translateY(-52%);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .ReactTable .-loading.-active {
    opacity: 1;
    z-index: 2;
    pointer-events: all;
  }
  .ReactTable .-loading.-active > div {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }
  .ReactTable .rt-resizing .rt-th,
  .ReactTable .rt-resizing .rt-td {
    transition: none !important;
    cursor: col-resize;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`