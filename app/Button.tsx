"use client";
export default function Button() {
  function TestError() {
    try {
      const a = null;
      return a.hello();
    } catch (error) {
      console.log("Error", error);
      window.Rollbar?.error(error);
    }
  }

  function TestError2() {
    throw new Error("This is a test error");
    const a = null;
    return a.hello();
  }

  return (
    <div className="flex gap-3">
      <button
        className="p-2 bg-red-500 text-slate-900 rounded"
        onClick={TestError}
      >
        Click me
      </button>
      <button
        className="p-2 bg-blue-500 text-slate-900 rounded"
        onClick={TestError2}
      >
        Click me 2{" "}
      </button>
    </div>
  );
}
