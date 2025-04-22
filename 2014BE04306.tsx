
import StudentContactCard from "@/components/StudentContactCard";
import LocationShare from "@/components/LocationShare";
import FinderContactForm from "@/components/FinderContactForm";

const MihirPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-background backdrop-blur shadow-xl rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 border border-primary-200">
        <div className="flex flex-col items-center gap-2">
          <img 
            src="/lovable-uploads/617ca0f5-3687-49ed-8036-5d8b48752d13.png" 
            alt="School Logo" 
            className="h-12"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-primary-900 text-center">
            Student Safety Contact & Location
          </h1>
          <p className="text-sm text-primary-600">
            AVM Juhu - Vile Parle West, Mumbai, Maharashtra 400056
          </p>
        </div>
        <StudentContactCard studentId="2014BE04306" />
        <FinderContactForm />
        <LocationShare />
        <p className="text-sm text-primary-600 text-center mt-4">
          If you found this student, please use the contacts above. Sharing your location helps school staff and family locate the child quickly.
        </p>
      </div>
    </div>
  );
};

export default MihirPage;
