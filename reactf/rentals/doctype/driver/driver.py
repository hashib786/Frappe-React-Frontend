# Copyright (c) 2025, Hashib Raja and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator


class Driver(WebsiteGenerator):
    def before_save(self):
        print(self)
        # set the full name of the driver
        self.full_name = f"{self.first_name} {self.last_name}"
        if self.full_name == "Hashib Raja":
            frappe.throw("Hashib Raja is not allowed to be a driver")
