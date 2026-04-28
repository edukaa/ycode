import { getImports } from '@/lib/apps/webflow/migration-service';
import { noCache } from '@/lib/api-response';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /ycode/api/apps/webflow/imports
 * List all Webflow site imports stored in app_settings.
 */
export async function GET() {
  try {
    const imports = await getImports();
    return noCache({ data: imports });
  } catch (error) {
    console.error('Error fetching Webflow imports:', error);
    return noCache(
      { error: error instanceof Error ? error.message : 'Failed to fetch imports' },
      500
    );
  }
}
