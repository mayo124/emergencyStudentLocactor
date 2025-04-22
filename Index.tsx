
import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Emergency Student Location System',
          text: 'AVM Emergency Student Location Tracking',
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support web share
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied",
          description: "The application URL has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast({
        title: "Share Failed",
        description: "Could not share the link. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-background backdrop-blur shadow-xl rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 border border-primary-200">
        <div className="flex flex-col items-center gap-4 w-full">
          <img 
            src="/lovable-uploads/617ca0f5-3687-49ed-8036-5d8b48752d13.png" 
            alt="AVM Logo" 
            className="h-24 mb-2"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-primary-900 text-center">
            Emergency Student Location System
          </h1>
          <Button 
            onClick={handleShare} 
            className="w-full mt-4"
            variant="outline"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Application
          </Button>
        </div>
        
        <div className="w-full space-y-4">
          <div className="p-4 bg-primary-50 rounded-lg">
            <h2 className="font-semibold text-primary-900 mb-2">School Locations</h2>
            <div className="space-y-3 text-sm text-primary-700">
              <p>AVM Juhu - Vile Parle West, Mumbai, Maharashtra 400056</p>
              <p>AVM Bandra - 24th Road, Bandra West, Mumbai, Maharashtra 400050</p>
              <p>AVM Santacruz - 30th Road, Pali Hill, Mumbai, Maharashtra 400054</p>
            </div>
          </div>
          
          <a href="/2014BE04306" className="block w-full p-4 bg-primary-100 rounded-lg hover:bg-primary-200 transition-colors">
            <h3 className="font-medium text-primary-900">Mihir Dhankani</h3>
            <p className="text-sm text-primary-700">Student ID: 2014BE04306</p>
          </a>
          
          <a href="/2012BE83422" className="block w-full p-4 bg-primary-100 rounded-lg hover:bg-primary-200 transition-colors">
            <h3 className="font-medium text-primary-900">Shoham Pokle</h3>
            <p className="text-sm text-primary-700">Student ID: 2012BE83422</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
