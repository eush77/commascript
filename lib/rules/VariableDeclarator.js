"use strict";
var $___46__46__47_node__;
var registerNodeProcessor = ($___46__46__47_node__ = require("../node"), $___46__46__47_node__ && $___46__46__47_node__.__esModule && $___46__46__47_node__ || {default: $___46__46__47_node__}).registerNodeProcessor;
registerNodeProcessor({
  name: 'VariableDeclarator',
  parseStatement: function(node) {
    throw new Error('Not Implemented');
  },
  scan: function(node) {
    throw new Error('Not Implemented');
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL1ZhcmlhYmxlRGVjbGFyYXRvci5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQTs7RUFBUyxzQkFBb0IsRUN4QjdCLEVBQUMsdUJBQW9CLENBQUEsT0FBTSxBQUFDLFdBQWtCLENBQ3RDLENBQUEsd0JBQXFCLGlDQUEyQixDQUFBLHdCQUFxQixHQUFLLEVBQUMsT0FBTSx1QkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBRHlCOUcsb0JBQW9CLEFBQUMsQ0FBQztBQUVwQixLQUFHLENBQUcscUJBQW1CO0FBRXpCLGVBQWEsQ0FBYixVQUFlLElBQUcsQ0FBRztBQUNuQixRQUFNLElBQUksTUFBSSxBQUFDLENBQUMsaUJBQWdCLENBQUMsQ0FBQztFQUNwQztBQUVBLEtBQUcsQ0FBSCxVQUFLLElBQUcsQ0FBRztBQUNULFFBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQyxpQkFBZ0IsQ0FBQyxDQUFDO0VBQ3BDO0FBQUEsQUFFRixDQUFDLENBQUM7QUFDRiIsImZpbGUiOiJydWxlcy9WYXJpYWJsZURlY2xhcmF0b3IuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxMy0yMDE0IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPiAoaHR0cDovL3RoZW9yZXRpY2FsaWRlYXRpb25zLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJOb2RlUHJvY2Vzc29yIH0gZnJvbSAnLi4vbm9kZSc7XG5cbnJlZ2lzdGVyTm9kZVByb2Nlc3Nvcih7XG5cbiAgbmFtZTogJ1ZhcmlhYmxlRGVjbGFyYXRvcicsXG5cbiAgcGFyc2VTdGF0ZW1lbnQobm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IEltcGxlbWVudGVkJyk7XG4gIH0sXG5cbiAgc2Nhbihub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgSW1wbGVtZW50ZWQnKTtcbiAgfVxuXG59KTtcbiIsIigkX19wbGFjZWhvbGRlcl9fMCA9IHJlcXVpcmUoJF9fcGxhY2Vob2xkZXJfXzEpLCBcbiAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgJiYgJF9fcGxhY2Vob2xkZXJfXzMuX19lc01vZHVsZSAmJiAkX19wbGFjZWhvbGRlcl9fNCB8fCB7ZGVmYXVsdDogJF9fcGxhY2Vob2xkZXJfXzV9KSJdfQ==