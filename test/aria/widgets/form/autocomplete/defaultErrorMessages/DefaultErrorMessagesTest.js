/*
 * Copyright 2015 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.widgets.form.autocomplete.defaultErrorMessages.DefaultErrorMessagesTest",
    $extends : "test.aria.widgets.form.BaseDefaultErrorMessagesTest",
    $dependencies : ["aria.utils.Array", "aria.utils.Json", "aria.resources.handlers.LCResourcesHandler"],
    $constructor : function () {
        // ---------------------------------------------------------------------

        this.$BaseDefaultErrorMessagesTest.constructor.call(
            this,
            "AutoComplete",
            [
                "validation"
            ]
        );

        // ---------------------------------------------------------------------

        var suggestions = [];
        var resourcesHandler = new aria.resources.handlers.LCResourcesHandler();
        resourcesHandler.setSuggestions(suggestions);

        this.data.resourcesHandler = resourcesHandler;
    },
    $destructor : function () {
        this.data.resourcesHandler.$dispose();
        this.data.resourcesHandler = null;
    }
});
