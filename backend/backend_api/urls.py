from backend_api.views import BikesViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'bikes', views.BikesViewSet, basename='bike')
urlpatterns = router.urls