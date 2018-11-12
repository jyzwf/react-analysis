/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//  react 的版本
import ReactVersion from 'shared/ReactVersion';
import {
  REACT_ASYNC_MODE_TYPE,  // Symbol.for('react.async_mode')
  REACT_FRAGMENT_TYPE,    // Symbol.for('react.fragment')
  REACT_PROFILER_TYPE,    // Symbol.for('react.profiler')
  REACT_STRICT_MODE_TYPE, // Symbol.for('react.strict_mode')
  REACT_PLACEHOLDER_TYPE, // Symbol.for('react.placeholder')
} from 'shared/ReactSymbols';   // 一些模式的Symbol显示

import { enableSuspense } from 'shared/ReactFeatureFlags';

import { Component, PureComponent } from './ReactBaseClasses';
import { createRef } from './ReactCreateRef';
import { forEach, map, count, toArray, only } from './ReactChildren';
import {
  createElement,
  createFactory,
  cloneElement,
  isValidElement,
} from './ReactElement';
import { createContext } from './ReactContext';
import forwardRef from './forwardRef';
import {
  createElementWithValidation,
  createFactoryWithValidation,
  cloneElementWithValidation,
} from './ReactElementValidator';
import ReactSharedInternals from './ReactSharedInternals';

const React = {
  Children: {
    map,
    forEach,
    count,
    toArray,
    only,
  },

  createRef,
  Component,
  PureComponent,

  createContext,
  forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: __DEV__ ? createElementWithValidation : createElement,
  cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
  createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals,
};

if (enableSuspense) {
  React.Placeholder = REACT_PLACEHOLDER_TYPE;
}

export default React;
