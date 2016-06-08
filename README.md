# postgres-utc-timestamp

Parse `timestamp without time zone` values as UTC timestamps. This was created to parse datetime values written from Rails apps. Rails always writes UTC timestamps, so the application reading must know to parse it as UTC. The default pg parser parses them as local timestamps.
