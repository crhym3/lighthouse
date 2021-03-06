"use strict";
/**
Copyright (c) 2013 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
**/

require("../base/base.js");

'use strict';

/**
 * @fileoverview Provides the Event Index class.
 */
global.tr.exportTo('tr.model', function () {
  /**
   * A Event Index maps an id to all the events that have that particular id
   *
   * @constructor
   */
  function ModelIndices(model) {
    // For now the only indices we construct are for flowEvents
    this.flowEventsById_ = {};
    model.flowEvents.forEach(function (fe) {
      if (fe.id !== undefined) {
        if (!this.flowEventsById_.hasOwnProperty(fe.id)) {
          this.flowEventsById_[fe.id] = new Array();
        }
        this.flowEventsById_[fe.id].push(fe);
      }
    }, this);
  }

  ModelIndices.prototype = {
    addEventWithId: function (id, event) {
      if (!this.flowEventsById_.hasOwnProperty(id)) {
        this.flowEventsById_[id] = new Array();
      }
      this.flowEventsById_[id].push(event);
    },

    getFlowEventsWithId: function (id) {
      if (!this.flowEventsById_.hasOwnProperty(id)) return [];
      return this.flowEventsById_[id];
    }
  };

  return {
    ModelIndices: ModelIndices
  };
});