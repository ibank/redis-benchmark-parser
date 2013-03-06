redis-benchmark-parser
======================

Parses Redis Benchmark results and lets you compare one result with other


Install
========

npm install -g redis-benchmark-parser

Usage
=======
It can be used in the binary mode

`redis-benchmark-report results-read-write-split.txt`

This generates the output file in the current folder as output.html. It can be opened to view the report.

`open output.html`

similar result can also be achieved by piping the contents of the file to the report

`cat results-read-write-split.txt | redis-benchmark-report`

or better still by piping the redis-benchmark command to report

`redis-benchmark -c 10 -n 10000 -p 6379 | redis-benchmark-report`

Programmatic Use
===============
It also exports a simple module to import to parse the benchmark information.

`var parser = require('redis-benchmark-parser')`

`parser.parse(content)`