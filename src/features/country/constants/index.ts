const COUNTRY_API_BASE_URL = "http://localhost:8080";
const FALLBACK_FLAG_IMAGE =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly93ZWIucmVzb3VyY2Uub3JnL2NjLyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vaW5rc2NhcGUuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQzIgogICB3aWR0aD0iMjI1IgogICBoZWlnaHQ9IjE1MCIKICAgc29kaXBvZGk6ZG9jYmFzZT0iRjpcTWlzIERvY3VtZW50b3MgLSBNaWFqIERva3VtZW50b2pcTWlzIGltw6FnZW5lc1wrK1dpa2lcU3VsbHB1a3VuYVxTVkciCiAgIHNvZGlwb2RpOmRvY25hbWU9IlNpbiBiYW5kZXJhLnN2ZyIKICAgdmVyc2lvbj0iMS4wIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzNSIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzA4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTAyNCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBpZD0iYmFzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjc1MzQzODM1IgogICAgIGlua3NjYXBlOmN4PSItMzE0LjIxNTkiCiAgICAgaW5rc2NhcGU6Y3k9Ii0zOC44NDA4NDgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii00IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItNCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPgogIDxnCiAgICAgaWQ9ImcxNDY4Ij4KICAgIDxwYXRoCiAgICAgICBpZD0icmVjdDEzMDgiCiAgICAgICBkPSJNIDAgMCBMIDAgMTUwIEwgMjI1IDE1MCBMIDIyNSAwIEwgMCAwIHogTSAxMTQuNzUgMjUgQyAxMTUuMTk4NzQgMjQuOTkwMjA0IDExNS42MzY3NSAyNS4wMDAwMDUgMTE2LjA5Mzc1IDI1IEMgMTIzLjYxNDYgMjUuMDAwMDk5IDEyOS44OTIyOCAyNi45OTc5NCAxMzQuOTA2MjUgMzAuOTY4NzUgQyAxMzkuOTY2NTQgMzQuOTM5NzQgMTQyLjQ5OTk0IDQwLjIwNzI5IDE0Mi41IDQ2Ljc4MTI1IEMgMTQyLjQ5OTk0IDUxLjI4MTY4OSAxNDEuNTc1NyA1NS4wODYyMSAxMzkuNzE4NzUgNTguMjE4NzUgQyAxMzcuOTA4MTEgNjEuMzA3MjkxIDEzNC42NzM3MiA2NC45NjQ4IDEzMC4wMzEyNSA2OS4xNTYyNSBDIDEyNS40MzUxIDczLjM0NzgxMiAxMjIuNDU1MjIgNzYuODE0MTYgMTIxLjA2MjUgNzkuNTkzNzUgQyAxMTkuNjY5NyA4Mi4zNzM0MTYgMTE4Ljk2ODcyIDg1LjQwOTcgMTE4Ljk2ODc1IDg4LjcxODc1IEMgMTE4Ljk2ODcyIDg5LjQyNDcxNyAxMTkuMjg3NTEgOTEuMjgxMDUgMTE5LjkzNzUgOTQuMjgxMjUgTCAxMDYuNjI1IDk0LjI4MTI1IEMgMTA2LjUzMjEzIDkzLjk3MjQyOSAxMDYuMTAxNzEgOTIuODQ3NjIgMTA1LjMxMjUgOTAuOTA2MjUgQyAxMDQuNTY5NjggODguOTY0OTU2IDEwNC4xODc0OCA4Ny4yNjg1NCAxMDQuMTg3NSA4NS44MTI1IEMgMTA0LjE4NzQ4IDgzLjAzMjkwOSAxMDQuNTg1NzUgODAuMzcxNTcgMTA1LjM3NSA3Ny44MTI1IEMgMTA2LjIxMDYzIDc1LjI1MzUxNyAxMDcuNDIxNTIgNzIuODYyMzYgMTA5IDcwLjY1NjI1IEMgMTEwLjU3ODQzIDY4LjQwNjEzNCAxMTMuNzAxMiA2NC44MzUwMSAxMTguMzQzNzUgNTkuOTM3NSBDIDEyMy4wMzI2NiA1NS4wNDAxMTkgMTI1LjM3NDk2IDUxLjAyMDU1IDEyNS4zNzUgNDcuODQzNzUgQyAxMjUuMzc0OTYgNDEuNjY2ODY5IDEyMS4xMjA3OCAzOC41NjI1OCAxMTIuNjI1IDM4LjU2MjUgQyAxMDguNDkzMTMgMzguNTYyNTgxIDEwNC4xOTA3MyA0MC41NDIwNSA5OS42ODc1IDQ0LjQ2ODc1IEwgOTIuNSAzMS42ODc1IEMgOTguMjA4MTEzIDI3LjQ0MDIzMyAxMDUuNjI1NjkgMjUuMTk5MTggMTE0Ljc1IDI1IHogTSAxMTMuNzE4NzUgMTAzLjI4MTI1IEMgMTEzLjgxNjUgMTAzLjI3OTE4IDExMy45MzI2IDEwMy4yODEyNSAxMTQuMDMxMjUgMTAzLjI4MTI1IEMgMTE3LjE4ODE0IDEwMy4yODEyNyAxMTkuODQ5MjMgMTA0LjM1MDk2IDEyMi4wMzEyNSAxMDYuNDY4NzUgQyAxMjQuMjU5NjIgMTA4LjU4NjU5IDEyNS4zNzQ5NiAxMTEuMTU2MDIgMTI1LjM3NSAxMTQuMTU2MjUgQyAxMjUuMzc0OTYgMTE3LjE1NjQ5IDEyNC4yNTk2MiAxMTkuNjk0NjggMTIyLjAzMTI1IDEyMS44MTI1IEMgMTE5Ljg0OTIzIDEyMy45MzAzMSAxMTcuMTg4MTQgMTI1IDExNC4wMzEyNSAxMjUgQyAxMTAuODc0MzEgMTI1IDEwOC4xNjU4OSAxMjMuOTMwMzEgMTA1LjkzNzUgMTIxLjgxMjUgQyAxMDMuNzA5MDggMTE5LjY5NDY4IDEwMi41OTM3MyAxMTcuMTU2NDkgMTAyLjU5Mzc1IDExNC4xNTYyNSBDIDEwMi41OTM3MyAxMTEuMTU2MDIgMTAzLjcwOTA4IDEwOC41ODY1OSAxMDUuOTM3NSAxMDYuNDY4NzUgQyAxMDguMDk2MjUgMTA0LjQxNzE0IDExMC42ODg1NyAxMDMuMzQ1MzggMTEzLjcxODc1IDEwMy4yODEyNSB6ICIKICAgICAgIHN0eWxlPSJmaWxsOiNiYmJiYmI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJyZWN0MTMxMCIKICAgICAgIGQ9Ik0gMCA1MCBMIDAgMTUwIEwgMjI1IDE1MCBMIDIyNSA1MCBMIDE0Mi4zMTI1IDUwIEMgMTQxLjk2NjMzIDUzLjEzMDE5IDE0MS4xMTU1MiA1NS44NjI0OTMgMTM5LjcxODc1IDU4LjIxODc1IEMgMTM3LjkwODExIDYxLjMwNzI5MSAxMzQuNjczNzIgNjQuOTY0OCAxMzAuMDMxMjUgNjkuMTU2MjUgQyAxMjUuNDM1MSA3My4zNDc4MTIgMTIyLjQ1NTIyIDc2LjgxNDE2IDEyMS4wNjI1IDc5LjU5Mzc1IEMgMTE5LjY2OTcgODIuMzczNDE2IDExOC45Njg3MiA4NS40MDk3IDExOC45Njg3NSA4OC43MTg3NSBDIDExOC45Njg3MiA4OS40MjQ3MTcgMTE5LjI4NzUxIDkxLjI4MTA1IDExOS45Mzc1IDk0LjI4MTI1IEwgMTA2LjYyNSA5NC4yODEyNSBDIDEwNi41MzIxMyA5My45NzI0MjkgMTA2LjEwMTcxIDkyLjg0NzYyIDEwNS4zMTI1IDkwLjkwNjI1IEMgMTA0LjU2OTY4IDg4Ljk2NDk1NiAxMDQuMTg3NDggODcuMjY4NTQgMTA0LjE4NzUgODUuODEyNSBDIDEwNC4xODc0OCA4My4wMzI5MDkgMTA0LjU4NTc1IDgwLjM3MTU3IDEwNS4zNzUgNzcuODEyNSBDIDEwNi4yMTA2MyA3NS4yNTM1MTcgMTA3LjQyMTUyIDcyLjg2MjM2IDEwOSA3MC42NTYyNSBDIDExMC41Nzg0MyA2OC40MDYxMzQgMTEzLjcwMTIgNjQuODM1MDEgMTE4LjM0Mzc1IDU5LjkzNzUgQyAxMjIuMDI4OTQgNTYuMDg4NDY1IDEyNC4yNzM2MiA1Mi43ODYyMzMgMTI1LjA2MjUgNTAgTCAwIDUwIHogTSAxMTMuNzE4NzUgMTAzLjI4MTI1IEMgMTEzLjgxNjUgMTAzLjI3OTE4IDExMy45MzI2IDEwMy4yODEyNSAxMTQuMDMxMjUgMTAzLjI4MTI1IEMgMTE3LjE4ODE0IDEwMy4yODEyNyAxMTkuODQ5MjMgMTA0LjM1MDk2IDEyMi4wMzEyNSAxMDYuNDY4NzUgQyAxMjQuMjU5NjIgMTA4LjU4NjU5IDEyNS4zNzQ5NiAxMTEuMTU2MDIgMTI1LjM3NSAxMTQuMTU2MjUgQyAxMjUuMzc0OTYgMTE3LjE1NjQ5IDEyNC4yNTk2MiAxMTkuNjk0NjggMTIyLjAzMTI1IDEyMS44MTI1IEMgMTE5Ljg0OTIzIDEyMy45MzAzMSAxMTcuMTg4MTQgMTI1IDExNC4wMzEyNSAxMjUgQyAxMTAuODc0MzEgMTI1IDEwOC4xNjU4OSAxMjMuOTMwMzEgMTA1LjkzNzUgMTIxLjgxMjUgQyAxMDMuNzA5MDggMTE5LjY5NDY4IDEwMi41OTM3MyAxMTcuMTU2NDkgMTAyLjU5Mzc1IDExNC4xNTYyNSBDIDEwMi41OTM3MyAxMTEuMTU2MDIgMTAzLjcwOTA4IDEwOC41ODY1OSAxMDUuOTM3NSAxMDYuNDY4NzUgQyAxMDguMDk2MjUgMTA0LjQxNzE0IDExMC42ODg1NyAxMDMuMzQ1MzggMTEzLjcxODc1IDEwMy4yODEyNSB6ICIKICAgICAgIHN0eWxlPSJmaWxsOiNkNGQ0ZDQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJyZWN0MTMxMyIKICAgICAgIGQ9Ik0gMCAxMDAgTCAwIDE1MCBMIDIyNSAxNTAgTCAyMjUgMTAwIEwgMCAxMDAgeiBNIDExMy43MTg3NSAxMDMuMjgxMjUgQyAxMTMuODE2NSAxMDMuMjc5MTggMTEzLjkzMjYgMTAzLjI4MTI1IDExNC4wMzEyNSAxMDMuMjgxMjUgQyAxMTcuMTg4MTIgMTAzLjI4MTI2IDExOS44NDkyNSAxMDQuMzUwOTcgMTIyLjAzMTI1IDEwNi40Njg3NSBDIDEyNC4yNTk2MSAxMDguNTg2NTcgMTI1LjM3NDk1IDExMS4xNTYwNSAxMjUuMzc1IDExNC4xNTYyNSBDIDEyNS4zNzQ5NSAxMTcuMTU2NDggMTI0LjI1OTYxIDExOS42OTQ3IDEyMi4wMzEyNSAxMjEuODEyNSBDIDExOS44NDkyNSAxMjMuOTMwMzEgMTE3LjE4ODEyIDEyNSAxMTQuMDMxMjUgMTI1IEMgMTEwLjg3NDMyIDEyNSAxMDguMTY1ODggMTIzLjkzMDMxIDEwNS45Mzc1IDEyMS44MTI1IEMgMTAzLjcwOTA4IDExOS42OTQ3IDEwMi41OTM3NCAxMTcuMTU2NDggMTAyLjU5Mzc1IDExNC4xNTYyNSBDIDEwMi41OTM3NCAxMTEuMTU2MDUgMTAzLjcwOTA4IDEwOC41ODY1NyAxMDUuOTM3NSAxMDYuNDY4NzUgQyAxMDguMDk2MjQgMTA0LjQxNzE1IDExMC42ODg1OSAxMDMuMzQ1MzcgMTEzLjcxODc1IDEwMy4yODEyNSB6ICIKICAgICAgIHN0eWxlPSJmaWxsOiNlM2UzZTM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjMuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==";

export { COUNTRY_API_BASE_URL, FALLBACK_FLAG_IMAGE };