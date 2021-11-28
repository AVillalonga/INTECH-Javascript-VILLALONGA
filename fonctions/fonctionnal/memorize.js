function memorize(callback, ) {
  /**
   * == @TODO ==
   */
}

function testWithoutCache() {
    console.time();
    console.timeEnd();
}

function testWithCache() {
    console.time();
    console.timeEnd();
}

(() => {
    testWithoutCache();
    testWithCache();
})()