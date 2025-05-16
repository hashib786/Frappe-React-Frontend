// Copyright (c) 2025, Hashib Raja and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    refresh(cur_frm) {
        cur_frm.add_custom_button(__("Accept"), function () {
            frappe.show_alert({
                message: __("Ride Booking Accepted"),
                indicator: "green",
            })
        });

    },
});
