from django.db import models
import requests


class Field(models.Model):
    FOOTBALL = 1
    BASKETBALL = 2
    VOLLEYBALL = 3
    TENNIS = 4

    SPORT_CHOICES = (
        (FOOTBALL, 'Футбол'),
        (BASKETBALL, 'Баскетбол'),
        (VOLLEYBALL, 'Воллейбол'),
        (TENNIS, 'Теннис')
    )

    NATURAL = 1
    ARTIFICIAL_TURF = 2
    PARKET = 3

    SURFACE_CHOICES = (
        (NATURAL, "Натуральное"),
        (ARTIFICIAL_TURF, "Искусственный газон"),
        (PARKET, "Паркет")
    )

    owner_id = models.IntegerField()
    name = models.CharField(max_length=50)
    category_sport = models.PositiveSmallIntegerField(choices=SPORT_CHOICES)
    location = models.FloatField()
    time_from = models.IntegerField()
    time_to = models.IntegerField()

    def get_duration(self):
        return self.time_from - self.time_to

    def createTickets(self):
        for i in range (1,11):
            requests.post(
                url="http://127.0.0.1:8000/api/ticket/",
                data={
                    "is_rented": False,
                    "field_id": id,
                    "rent_id": 1
                },
            )


    description = models.TextField(max_length=300)
    price = models.CharField(max_length=255)
    image = models.ImageField(blank=True, null=True)
    dimensions = models.CharField(max_length=100)  # The dimensions of the FIELD, such as length and width.
    surface_type = models.PositiveSmallIntegerField(choices=SURFACE_CHOICES)  # The type of surface material used on the FIELD (e.g., grass, artificial turf).
    capacity = models.IntegerField(null=True, blank=True)  # The maximum capacity or seating capacity of the FIELD.
    facilities = models.CharField(max_length=255, null=True, blank=True)  # Any additional facilities or amenities associated with the FIELD, such as changing
    lighting = models.TextField(null=True, blank=True)  # The availability or type of lighting on the FIELD.
    rules = models.CharField(max_length=255, null=True, blank=True)  # Any specific rules or regulations that apply to the FIELD usage.

