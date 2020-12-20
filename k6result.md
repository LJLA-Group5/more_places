
          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 1500 max VUs, 2m0s max duration (incl. graceful stop):
           * default: Up to 1500 looping VUs for 1m30s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (1m31.1s), 0000/1500 VUs, 45617 complete and 0 interrupted iterations
default ✓ [======================================] 0000/1500 VUs  1m30s

    ✓ status 200

    checks.....................: 100.00% ✓ 45617  ✗ 0
    data_received..............: 186 MB  2.0 MB/s
    data_sent..................: 4.5 MB  50 kB/s
    http_req_blocked...........: avg=40.43µs  min=1µs    med=4µs      max=7.85ms  p(90)=27µs  p(95)=236.19µs
    http_req_connecting........: avg=9.09µs   min=0s     med=0s       max=2.93ms  p(90)=0s    p(95)=0s
    http_req_duration..........: avg=836.74ms min=2.37ms med=690.64ms max=3.37s   p(90)=1.65s p(95)=1.82s
    http_req_receiving.........: avg=98.36µs  min=14µs   med=48µs     max=22.11ms p(90)=108µs p(95)=278µs
    http_req_sending...........: avg=46.89µs  min=6µs    med=18µs     max=9.88ms  p(90)=57µs  p(95)=101.19µs
    http_req_tls_handshaking...: avg=0s       min=0s     med=0s       max=0s      p(90)=0s    p(95)=0s
    http_req_waiting...........: avg=836.59ms min=2.28ms med=690.42ms max=3.37s   p(90)=1.65s p(95)=1.82s
    http_reqs..................: 45617   500.902705/s
    iteration_duration.........: avg=1.83s    min=1s     med=1.69s    max=4.38s   p(90)=2.65s p(95)=2.82s
    iterations.................: 45617   500.902705/s
    vus........................: 0       min=0    max=1499
    vus_max....................: 1500    min=1500 max=1500