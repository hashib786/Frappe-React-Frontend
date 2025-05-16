# Copyright (c) 2025, Hashib Raja and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):
    def validate(self):
        if not self.rate:
            frappe.throw("Rate is required")
        # set the total fare
        items = self.items
        total_distance = 0
        for item in items:
            total_distance += item.destination
        self.total_amount = total_distance * self.rate
