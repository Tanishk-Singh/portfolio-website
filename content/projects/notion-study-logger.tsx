export default function NotionStudyLoggerContent() {
  return (
    <>
      <p>Placeholder write-up — replace with real screenshots and detail.</p>
      <h2>What it does</h2>
      <p>
        A small desktop app that sits in the background and logs study
        session start/stop times directly into a Notion "Time" database,
        removing the friction of manual time tracking.
      </p>
      <h2>Notes</h2>
      <p>
        Built with Python and tkinter, running via <code>pythonw.exe</code>{" "}
        on Windows. The Notion integration setup has a common failure
        point worth flagging: creating the connection and granting it
        database access are two separate steps, and skipping the second
        produces a silent 404.
      </p>
    </>
  );
}
