from django.urls import path
from .views import FieldViews, CreateTicketView
urlpatterns = [
    path('field/fields/', FieldViews.as_view(), name='FIELD-list'),
    path('field/fields/<str:pk>/', FieldViews.as_view(), name='FIELD-item'),
    path('field/create-tickets/<int:time_from>/<int:time_to>/<int:field_id>', CreateTicketView.as_view())
]