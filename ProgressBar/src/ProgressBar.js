export default function ProgressBar({ progress }) {
  //handle invalid inputs
  const safeProgress = Math.min(100, Math.max(0, progress));
  return (
    <div className="container">
      <span className="progress-bar">
        <span
          className="progress"
          style={{
            width: `${safeProgress}%`, //not smooth if we just add width
            transition: "width 0.3s ease-in-out", //Animation to make it smooth
            backgroundColor:
              progress < 30 ? "red" : progress < 60 ? "yellow" : "green",
          }}
        >
          <span className="text">{safeProgress}%</span>
        </span>
      </span>
    </div>
  );
}

//******************TO AVOID INLINE STYLES WE CAN USE:******************************************************************************************
// ✅ Idea

// 👉 Instead of:

// style={{ backgroundColor: "red" }}

// 👉 Use:

// className="progress red"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CSS
/* Base progress */
// .progress {
//     display: block;
//     min-height: 25px;
//     border: 0.5px solid black;
//     transition: width 0.3s ease;
//   }

//   /* Color variants */
//   .red {
//     background-color: red;
//   }

//   .yellow {
//     background-color: yellow;
//   }

//   .green {
//     background-color: green;
//   }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Decide class in JS
// const getColorClass = (progress) => {
//     if (progress < 30) return "red";
//     if (progress < 60) return "yellow";
//     return "green";
//   };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Apply Class Dynamically
{
  /* <span
          className={`progress ${colorClass}`}
          style={{ width: `${progress}%` }} // only dynamic part left
        ></span> */
}
//**************************************************************************************************************************************************************/

// 🔥 5. Accessibility (VERY important)

// 👉 Big interview brownie points

// <div
//   role="progressbar"
//   aria-valuenow={progress}
//   aria-valuemin="0"
//   aria-valuemax="100"
// >

// 💬 Expect:

// “How will screen readers understand this?”

//*************************************************************************************************************** */

// 🔥 8. Performance question

// 👉 If progress updates frequently

// 💬 Expect:

// “How will you optimize re-renders?”

// Answer:

// React.memo
// debounce/throttle updates

// ******************************************************************************************************************

// 🔥 9. Vertical progress bar

// 👉 Twist question

// .progress-bar {
//   height: 200px;
//   width: 30px;
// }

// ****************************************************************
