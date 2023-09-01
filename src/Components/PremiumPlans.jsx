import React from "react";
import Button from "./Button";
import ClientCatch from "./ClientCatch";
const PremiumPlans = () => {
  return (
    <div>
      <div className="premiumPlans">
        <div className="premiumPlansHeader">
          <span>Make the wise decitions for your business</span>
          <p>Choose from our affordable 3 packages</p>
        </div>
        <div className="premiumPlansContent">
          <div className="plan">
            <div className="premiumPlanPrice">
              <p>Premium plan</p>
              <span>
                $29 <p>/month</p>
              </span>
              <p className="suitable">This package is suitable for teams </p> <p>1-100 people</p>
            </div>
            <div className="premiumPlanContent">
              <span>Whats included:</span>
              <p>20 GB dedicated hosting free</p>
              <p>best for developers, freelancer 1 year support</p>
            </div>
            <Button
              text="Get started"
              style={{
                background: "transparent",
                color: "#E0E0E0",
                border: "1px solid white",
                width: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                gap: "10px",
                padding: "10px",
                height: "50px",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          </div>
          <div className="plan">
          <div className="premiumPlanPrice">
              <p>Premium plan</p>
              <span>
                $79 <p>/month</p>
              </span>
              <p>This package is suitable for teams </p> <p>1-100 people</p>
            </div>
            <div className="premiumPlanContent">
              <span>Whats included:</span>
              <p>10 GB dedicated hosting free</p>
              <p>best for developers, freelancer 1 year support</p>
              <p>Free customer domain</p>
              <p>Basic statistics</p>
            </div>
            <Button
              text="Get started"
              style={{
                background: "linear-gradient(90deg, #2b59ff 0%, #bb2bff 100%)",
                color: "#E0E0E0",
                border: "1px solid white",
                width: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                gap: "10px",
                padding: "10px",
                height: "50px",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          </div>
          <div className="plan">
             <div className="premiumPlanPrice">
              <p>Premium plan</p>
              <span>
                $129 <p>/month</p>
              </span>
              <p>This package is suitable for teams</p> <p>1-100 people</p>
            </div>
            <div className="premiumPlanContent">
              <span>Whats included:</span>
              <p>20 GB dedicated hosting free</p>
              <p>best for developers, freelancer 1 year support</p>
              <p>Free customers domain</p>
              <p>Full statistics</p>
            </div>
            <Button
              text="Get started"
              style={{
                background: "transparent",
                color: "#E0E0E0",
                border: "1px solid white",
                width: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                gap: "10px",
                padding: "10px",
                height: "50px",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          </div>
        </div>  
      </div>
    <ClientCatch/>
    </div>
  );
};

export default PremiumPlans;
