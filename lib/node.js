"use strict";

exports.isCommaScriptDirective = isCommaScriptDirective;
exports.registerNodeProcessor = registerNodeProcessor;
exports.processNode = processNode;
exports.processBlock = processBlock;
Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
The MIT License (MIT)

Copyright (c) 2013-2014 Bryan Hughes <bryan@theoreticalideations.com> (http://theoreticalideations.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var _state = require("./state");

var handleInternalError = _state.handleInternalError;
var getState = _state.getState;
var states = _state.states;

var processors = {};

function isCommaScriptDirective(node) {
  return node.type == "ExpressionStatement" && node.expression.type == "Literal" && node.expression.value == "use commascript";
}

function registerNodeProcessor(processor) {
  processors[processor.name] = processor;
}

function processNode(node) {
  var processor = processors[node.type];
  if (!processor) {
    handleInternalError("No processor for rule type " + node.type);
  }
  switch (getState()) {
    case states.SCANNING:
      return processor.scan(node);
    case states.PARSING_STATEMENT:
      return processor.parseStatement(node);
    case states.PARSING_EXPRESSION:
      return processor.parseExpression(node);
    case states.DECLARING:
      return processor.declare(node);
    default:
      handleInternalError("Unknown or invalid state " + getState() + " in processNode");
  }
}

function processBlock(nodes) {
  if (nodes) {
    switch (getState()) {
      case states.SCANNING:
        for (var i = 0, len = nodes.length; i < len; i++) {
          processNode(nodes[i].analyze());
        }
        break;
      case states.PARSING_STATEMENT:
        for (var i = 0, len = nodes.length; i < len; i++) {
          var result = processNode(nodes[i]);
          if (result.result == "return" || result.result == "throw" || result.result == "break" || result.result == "continue") {
            return result;
          }
        }
        break;
      default:
        handleInternalError("Unknown or invalid state " + getState() + " in processBlock");
    }
  }
  return {
    result: "normal"
  };
}
//# sourceMappingURL=data:application/json;base64,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bUIsQ0FBQywyQkFBMkIsR0FBRyxRQUFRLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBQUEsS0FDcEY7R0FDRjtBQUNELFNBQU87QUFDTCxVQUFNLEVBQUUsUUFBUTtHQUNqQixDQUFDO0NBQ0giLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDEzLTIwMTQgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+IChodHRwOi8vdGhlb3JldGljYWxpZGVhdGlvbnMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeyBoYW5kbGVJbnRlcm5hbEVycm9yLCBnZXRTdGF0ZSwgc3RhdGVzIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbnZhciBwcm9jZXNzb3JzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hU2NyaXB0RGlyZWN0aXZlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgJiZcbiAgICBub2RlLmV4cHJlc3Npb24udHlwZSA9PSAnTGl0ZXJhbCcgJiZcbiAgICBub2RlLmV4cHJlc3Npb24udmFsdWUgPT0gJ3VzZSBjb21tYXNjcmlwdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5vZGVQcm9jZXNzb3IocHJvY2Vzc29yKSB7XG4gIHByb2Nlc3NvcnNbcHJvY2Vzc29yLm5hbWVdID0gcHJvY2Vzc29yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSkge1xuICB2YXIgcHJvY2Vzc29yID0gcHJvY2Vzc29yc1tub2RlLnR5cGVdO1xuICBpZiAoIXByb2Nlc3Nvcikge1xuICAgIGhhbmRsZUludGVybmFsRXJyb3IoJ05vIHByb2Nlc3NvciBmb3IgcnVsZSB0eXBlICcgKyBub2RlLnR5cGUpO1xuICB9XG4gIHN3aXRjaCAoZ2V0U3RhdGUoKSkge1xuICAgIGNhc2Ugc3RhdGVzLlNDQU5OSU5HOlxuICAgICAgcmV0dXJuIHByb2Nlc3Nvci5zY2FuKG5vZGUpO1xuICAgIGNhc2Ugc3RhdGVzLlBBUlNJTkdfU1RBVEVNRU5UOlxuICAgICAgcmV0dXJuIHByb2Nlc3Nvci5wYXJzZVN0YXRlbWVudChub2RlKTtcbiAgICBjYXNlIHN0YXRlcy5QQVJTSU5HX0VYUFJFU1NJT046XG4gICAgICByZXR1cm4gcHJvY2Vzc29yLnBhcnNlRXhwcmVzc2lvbihub2RlKTtcbiAgICBjYXNlIHN0YXRlcy5ERUNMQVJJTkc6XG4gICAgICByZXR1cm4gcHJvY2Vzc29yLmRlY2xhcmUobm9kZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGhhbmRsZUludGVybmFsRXJyb3IoJ1Vua25vd24gb3IgaW52YWxpZCBzdGF0ZSAnICsgZ2V0U3RhdGUoKSArICcgaW4gcHJvY2Vzc05vZGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0Jsb2NrKG5vZGVzKSB7XG4gIGlmIChub2Rlcykge1xuICAgIHN3aXRjaChnZXRTdGF0ZSgpKSB7XG4gICAgICBjYXNlIHN0YXRlcy5TQ0FOTklORzpcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgcHJvY2Vzc05vZGUobm9kZXNbaV0uYW5hbHl6ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc3RhdGVzLlBBUlNJTkdfU1RBVEVNRU5UOlxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gcHJvY2Vzc05vZGUobm9kZXNbaV0pO1xuICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0ID09ICdyZXR1cm4nIHx8IHJlc3VsdC5yZXN1bHQgPT0gJ3Rocm93JyB8fCByZXN1bHQucmVzdWx0ID09ICdicmVhaycgfHwgcmVzdWx0LnJlc3VsdCA9PSAnY29udGludWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaGFuZGxlSW50ZXJuYWxFcnJvcignVW5rbm93biBvciBpbnZhbGlkIHN0YXRlICcgKyBnZXRTdGF0ZSgpICsgJyBpbiBwcm9jZXNzQmxvY2snKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQ6ICdub3JtYWwnXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=