# Copyright (c) 2025, Hashib Raja and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
    def before_save(self):
        print(self)
        # set the full name of the driver
        self.full_name = f"{self.first_name} {self.last_name}"
